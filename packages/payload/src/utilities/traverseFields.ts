import type { Field } from '../fields/config/types.js'

import { fieldHasSubFields } from '../fields/config/types.js'

export type TraverseFieldsCallback = (args: {
  /**
   * The current field
   */
  field: Field
  /**
   * Function that when called will skip the current field and continue to the next
   */
  next?: () => void
  /**
   * The parent reference object
   */
  parentRef?: Record<string, unknown> | unknown
  /**
   * The current reference object
   */
  ref?: Record<string, unknown> | unknown
}) => boolean | void

type TraverseFieldsArgs = {
  callback: TraverseFieldsCallback
  fields: Field[]
  parentRef?: Record<string, unknown> | unknown
  ref?: Record<string, unknown> | unknown
}

/**
 * Iterate a recurse an array of fields, calling a callback for each field
 *
 * @param fields
 * @param callback callback called for each field, discontinue looping if callback returns truthy
 * @param ref
 * @param parentRef
 */
export const traverseFields = ({
  callback,
  fields,
  parentRef = {},
  ref = {},
}: TraverseFieldsArgs): void => {
  fields.some((field) => {
    let skip = false
    const next = () => {
      skip = true
    }
    if (callback && callback({ field, next, parentRef, ref })) {
      return true
    }
    if (skip) {
      return false
    }
    if (fieldHasSubFields(field)) {
      const parentRef = ref
      if ('name' in field && field.name) {
        if (typeof ref[field.name] === 'undefined') {
          ref[field.name] = {}
        }
        ref = ref[field.name]
      }
      traverseFields({ callback, fields: field.fields, parentRef, ref })
    }

    if (field.type === 'tabs' && 'tabs' in field) {
      field.tabs.forEach((tab) => {
        if ('name' in tab && tab.name) {
          if (typeof ref[tab.name] === 'undefined') {
            ref[tab.name] = {}
          }
          ref = ref[tab.name]
        }
        traverseFields({ callback, fields: tab.fields, parentRef, ref })
      })
    }
  })
}
