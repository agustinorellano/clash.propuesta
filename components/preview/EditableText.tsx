'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { useEditContext } from '@/lib/edit-context'

interface EditableTextProps {
  /** Section that owns this text element */
  sectionId: string
  /** Unique content key within the section */
  contentKey: string
  /** Default text shown when no override exists */
  defaultValue: string
  /** Visual styles — identical in view and edit mode */
  style?: React.CSSProperties
  /** HTML element tag */
  tag?: string
  /** Allow multi-line editing (Enter inserts newline) */
  multiline?: boolean
}

/**
 * Renders plain text in view mode.
 * Renders a contenteditable element in edit mode.
 * Visual styles are identical in both modes — the design is always preserved.
 */
export function EditableText({
  sectionId,
  contentKey,
  defaultValue,
  style,
  tag = 'span',
  multiline = false,
}: EditableTextProps) {
  const { editMode, getContent, setContent } = useEditContext()
  const text = getContent(sectionId, contentKey, defaultValue)

  if (!editMode) {
    const Tag = tag as any
    return <Tag style={style}>{text}</Tag>
  }

  return (
    <InlineEditor
      // key forces remount (reset initialValue) when external value changes (undo/redo)
      key={text}
      tag={tag}
      initialValue={text}
      style={style}
      multiline={multiline}
      onCommit={(v) => { if (v !== text) setContent(sectionId, contentKey, v) }}
    />
  )
}

// ─── Internal contenteditable engine ─────────────────────────────────────────

interface EditorProps {
  tag: string
  initialValue: string
  style?: React.CSSProperties
  multiline: boolean
  onCommit: (value: string) => void
}

function InlineEditor({ tag, initialValue, style, multiline, onCommit }: EditorProps) {
  const ref = useRef<HTMLElement>(null)
  const [focused, setFocused] = useState(false)

  // Set initial content exactly once after mount — avoids React's child reconciliation
  useLayoutEffect(() => {
    if (ref.current) ref.current.textContent = initialValue
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const Tag = tag as any

  return (
    <Tag
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      data-editable="true"
      style={{
        ...style,
        outline: 'none',
        cursor: 'text',
        borderRadius: 3,
        boxShadow: focused
          ? 'inset 0 0 0 1.5px rgba(220,38,38,0.55), 0 0 0 3px rgba(220,38,38,0.08)'
          : 'inset 0 0 0 1px rgba(220,38,38,0.2)',
        transition: 'box-shadow 0.12s',
        minWidth: '0.5em',
        // Preserve original whitespace handling
        whiteSpace: multiline ? 'pre-wrap' : style?.whiteSpace ?? 'normal',
      }}
      onFocus={() => setFocused(true)}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (!multiline && e.key === 'Enter') {
          e.preventDefault()
          ref.current?.blur()
        }
        // Escape: revert and exit
        if (e.key === 'Escape') {
          if (ref.current) ref.current.textContent = initialValue
          ref.current?.blur()
        }
      }}
      onBlur={() => {
        setFocused(false)
        const v = ref.current?.textContent ?? ''
        onCommit(v)
      }}
    />
  )
}
