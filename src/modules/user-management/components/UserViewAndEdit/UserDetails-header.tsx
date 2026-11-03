import React from 'react'

const UserDetailsHeader = () => {
  return (
    <section className="bg-cyan-950/30 border border-white rounded-xl p-5 shadow-sm">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-cyan-400 font-medium mb-2">
            <span className="hover:underline cursor-pointer">User Directory</span>
            <span>/</span>
            <span className="hover:underline cursor-pointer">Profile</span>
            <span>/</span>
            <span className="text-cyan-200 font-semibold">U-883401</span>
          </nav>

          {/* Title & Status Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                User Profile: Alexander Mercer <span className="text-cyan-400 font-mono text-lg font-normal">(ID: U-883401)</span>
              </h1>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Active
              </span>
            </div>

            <div className="text-xs text-cyan-300/70 font-mono bg-cyan-900/40 px-3 py-1.5 rounded-md border border-cyan-800/50">
              SECTION: Sub-Header & Meta
            </div>
          </div>
        </section>
  )
}

export default UserDetailsHeader
