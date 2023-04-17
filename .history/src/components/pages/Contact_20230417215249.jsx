import React from 'react'

const Contact = () => {
  return (
    <>
    <Form.Group className="mb-3">
      <Form.Label>Disabled input</Form.Label>
      <Form.Control placeholder="Disabled input" disabled />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Disabled select menu</Form.Label>
      <Form.Select disabled>
        <option>Disabled select</option>
      </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Check type="checkbox" label="Can't check this" disabled />
    </Form.Group>
  </>
  )
}

export default Contact