import React, { useState, useEffect, useRef } from 'react'

interface Props {
  size?: number
  name: string
}

const Icon = ({ name, size = 24 }: Props) => {
  const ImportedIconRef = useRef<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(`../public/icons/${name}.svg`)
        ImportedIconRef.current = namedImport
      } catch (err) {
        throw err
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [name])

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef
    return <ImportedIcon width={size} height={size} />
  }

  return null
}

export default Icon
