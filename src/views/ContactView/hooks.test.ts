import { renderHook } from '@testing-library/react'
import { useContactView } from './hooks'
import { describe, expect, it } from 'vitest'

describe('useContactView', () => {
  it('should return empty object', () => {
    const { result } = renderHook(() => useContactView())

    expect(result.current).toEqual({})
  })
})