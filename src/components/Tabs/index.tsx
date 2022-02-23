import Vue, { VNode, CreateElement } from 'vue'
import { Component, Emit, Prop, Model } from 'vue-property-decorator'
import './index.scss'

interface ITab {
  label: string
  total?: number | string
  code: string
}

@Component({})
export default class PTabs extends Vue {
  // 需要渲染的tab项
  @Prop({ type: Array, default: () => [] }) private readonly tabs!: ITab[]

  // v-model 双向绑定值
  @Model('tabChange', { type: String, required: true }) private readonly value!: string

  // 选中tab变更
  @Emit('change')
  private change(tab: ITab): ITab {
    return tab
  }

  // 更新 v-model
  @Emit('tabChange')
  private tabChange(tab: ITab) {
    return tab.code
  }

  render(h: CreateElement) {
    const tabClick = (tab: ITab) => {
      if (tab.code !== this.value) {
        // 先更新v-model，在触发变更事件
        this.tabChange(tab)
        setTimeout(() => {
          this.change(tab)
        });
      }
    }

    const renderLis = (tab: ITab[]) => tab.map(i => {
      return (
        <li
          class={i.code === this.value ? 'act' : ''}
          on-click={() => { tabClick(i) }}
        >
          {i.label}
          {Object.prototype.hasOwnProperty.call(i, 'total') ? <span>{i.total}</span> : ''}
        </li>
      )
    })

    return (
      <div class="p-tabs">
        <ul>
          {renderLis(this.tabs)}
        </ul>
      </div>
    )
  }
}
