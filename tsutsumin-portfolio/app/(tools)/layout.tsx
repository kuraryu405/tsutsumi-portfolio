import { ReactNode } from "react";

export default function ToolsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* 将来ここに認証ロジックを追加 */}
      {children}
    </div>
  );
}
