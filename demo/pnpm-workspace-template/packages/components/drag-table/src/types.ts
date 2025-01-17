export interface Column {
  key: string
  title: string
  width?: number | string
  fixed?: boolean
  sortable?: boolean
}

export interface DragTableProps {
  columns: Column[]
  data: Record<string, any>[]
  rowKey?: string
  border?: boolean
  stripe?: boolean
} 