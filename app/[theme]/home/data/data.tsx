import {
  ArrowDownCircle,
  ArrowRightCircle,
  ArrowUpCircle,
  Bug,
  CheckCircle2,
  Circle,
  HelpCircle,
  Info,
  ShieldAlert,
  XCircle,
} from "lucide-react"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "info",
    label: "INFO",
    icon: Info,
  },
  {
    value: "debug",
    label: "DEBUG",
    icon: Bug,
  },
  {
    value: "error",
    label: "ERROR",
    icon: ShieldAlert,
  },
  {
    value: "fatal",
    label: "FATAL",
    icon: XCircle,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownCircle,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightCircle,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpCircle,
  },
]
