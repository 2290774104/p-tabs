
import Vue from 'vue'
// for future
// export interface InstallationOptions {}
// export function install (vue: typeof Vue, options: InstallationOptions): void

// now
export function install(vue: typeof Vue): void

export interface ITab {
  label: string
  total?: number | string
  code: string
}
