import React from 'react'
import { describe, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Badge } from './badge'
import { variants } from './badge.props'
import { beforeEach } from 'vitest'

describe('@badge', () => {
 beforeEach(cleanup)

 test('renders any children passed to it', ({ expect }) => {
  render(<Badge>Payment confirmed</Badge>)

  expect(screen.getByText('Payment confirmed')).toBeInTheDocument()
 })

 test('applies the correct variant classes based on the variant prop', ({ expect }) => {
  for (const variant of variants) {
   const CONTENT = `Payment confirmed - ${variant}`

   render(<Badge variant={variant}>{CONTENT}</Badge>)


   const badgeClasses = screen.getByText(CONTENT).classList.toString()
   expect(badgeClasses).toContain(`kb-variant-${variant}`)

  }



 })

 test('can change the default rendered html element using the asChild prop', ({ expect }) => {
  render(<Badge asChild><button>Shipped</button></Badge>)

  expect(screen.getByRole('button')).toBeInTheDocument()
 })

 test('applies the correct responsive classes based on the size responsive property', ({ expect }) => {
  render(<Badge size={{ xl: 'sm', sm: 'md' }}>Shipped</Badge>)

  const badgeClasses = screen.getByText('Shipped').classList.toString()

  expect(badgeClasses).toEqual('kb-badge xl:kb-r-size-sm sm:kb-r-size-md kb-r-size-md kb-variant-info')
 })
})
