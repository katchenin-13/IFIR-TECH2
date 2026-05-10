// features/formations/presentation/components/FormationDetail.tsx
import { Formation } from '../../domain/entities/formation.entity'

export function FormationDetail({ formation }: { formation: Formation }) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{formation.title}</h1>
      <p className="text-gray-600 mb-8">{formation.longDescription}</p>

      <div className="grid grid-cols-3 gap-4 mb-10 text-center">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Durée</p>
          <p className="font-semibold">{formation.duration}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Prix</p>
          <p className="font-semibold">{formation.price}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Certification</p>
          <p className="font-semibold">{formation.certification ? '✅ Incluse' : '❌ Non incluse'}</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Objectifs</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {formation.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Prérequis</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {formation.prerequisites.map((pre, i) => <li key={i}>{pre}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Programme</h2>
        <div className="space-y-4">
          {formation.modules
            .sort((a, b) => a.order - b.order)
            .map(module => (
              <div key={module.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{module.title}</h3>
                  <span className="text-sm text-gray-500">{module.duration}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{module.description}</p>
                <div className="flex flex-wrap gap-2">
                  {module.topics.map(topic => (
                    <span key={topic} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  )
}
