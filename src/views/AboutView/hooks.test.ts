import { renderHook } from '@testing-library/react'
import { useAboutView } from './hooks'
import { describe, expect, it } from 'vitest'

describe('useAboutView', () => {
  it('should return empty object', () => {
    const { result } = renderHook(() => useAboutView())

    expect(result.current).toEqual({})
  })
})
