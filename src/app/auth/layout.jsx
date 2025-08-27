export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-full max-w-md card">
        {children}
      </div>
    </div>
  )
}
