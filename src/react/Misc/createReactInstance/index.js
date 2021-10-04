export const createReactInstance = fiber => {
  let instance
  if (fiber.tag === 'class_component') {
    instance = new fiber.type(fiber.props)
  } else {
    instance = fiber.type
  }
  return instance
}
