import type { SanitizedConfig } from '../../config/types.js'
import type { AddToImportMap, Imports, InternalImportMap } from './index.js'

import { iterateCollections } from './iterateCollections.js'
import { iterateGlobals } from './iterateGlobals.js'

export function iterateConfig({
  addToImportMap,
  baseDir,
  config,
  importMap,
  imports,
}: {
  addToImportMap: AddToImportMap
  baseDir: string
  config: SanitizedConfig
  importMap: InternalImportMap
  imports: Imports
}) {
  iterateCollections({
    addToImportMap,
    baseDir,
    collections: config.collections,
    config,
    importMap,
    imports,
  })

  iterateGlobals({
    addToImportMap,
    baseDir,
    config,
    globals: config.globals,
    importMap,
    imports,
  })

  typeof config.admin?.avatar === 'object' && addToImportMap(config.admin?.avatar?.Component)

  addToImportMap(config.admin?.components?.Nav)

  addToImportMap(config.admin?.components?.logout?.Button)
  addToImportMap(config.admin?.components?.graphics?.Icon)
  addToImportMap(config.admin?.components?.graphics?.Logo)

  addToImportMap(config.admin?.components?.actions)
  addToImportMap(config.admin?.components?.afterDashboard)
  addToImportMap(config.admin?.components?.afterLogin)
  addToImportMap(config.admin?.components?.afterNavLinks)
  addToImportMap(config.admin?.components?.beforeDashboard)
  addToImportMap(config.admin?.components?.beforeLogin)
  addToImportMap(config.admin?.components?.beforeNavLinks)

  addToImportMap(config.admin?.components?.providers)

  if (config.admin?.components?.views) {
    addToImportMap(Object.values(config.admin?.components?.views))
  }

  if (config?.admin?.importMap?.generators?.length) {
    for (const generator of config.admin.importMap.generators) {
      generator({
        addToImportMap,
        baseDir,
        config,
        importMap,
        imports,
      })
    }
  }

  if (config?.admin?.adminDependencies) {
    for (const key in config.admin.adminDependencies) {
      const dependency = config.admin.adminDependencies[key]
      addToImportMap(dependency.path)
    }
  }

  /*
  if (
    config?.editor &&
    typeof config.editor === 'object' &&
    config.editor.generateImportMap &&
    typeof config.editor.generateImportMap === 'function'
  ) {
    config.editor.generateImportMap({
      addToImportMap,
      baseDir,
      componentMap,
      config,
      importMap,
    })
  }*/ // No need to do that here since in the sanitized editor config, this root editor is already added to the field editor - and we already process that in iterateFields
}