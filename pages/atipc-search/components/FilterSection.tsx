interface FilterSectionProps {
  filters: {
    noWebsite: boolean
    hasPhotos: boolean
    hasReviews: boolean
  }
  setFilters: (filters: any) => void
}

export default function FilterSection({ filters, setFilters }: FilterSectionProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50">
      <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Filtros
      </h3>
      <div className="space-y-4">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.noWebsite}
            onChange={(e) => setFilters({ ...filters, noWebsite: e.target.checked })}
            className="w-5 h-5 rounded border-gray-600 text-purple-600 focus:ring-purple-500"
          />
          <span className="group-hover:text-purple-400 transition-colors">Sem site</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.hasPhotos}
            onChange={(e) => setFilters({ ...filters, hasPhotos: e.target.checked })}
            className="w-5 h-5 rounded border-gray-600 text-purple-600 focus:ring-purple-500"
          />
          <span className="group-hover:text-purple-400 transition-colors">Com fotos</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.hasReviews}
            onChange={(e) => setFilters({ ...filters, hasReviews: e.target.checked })}
            className="w-5 h-5 rounded border-gray-600 text-purple-600 focus:ring-purple-500"
          />
          <span className="group-hover:text-purple-400 transition-colors">Com avaliações</span>
        </label>
      </div>
    </div>
  )
}

