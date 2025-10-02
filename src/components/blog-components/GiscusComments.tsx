'use client'

import React from 'react'
import Giscus from '@giscus/react'

type Props = {
  mapping?: 'url' | 'title' | 'og:title' | 'pathname' | 'specific'
}

export default function GiscusComments({ mapping = 'pathname' }: Props) {
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO as string
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID as string
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY as string
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID as string

  if (!repo || !repoId || !category || !categoryId) {
    return <div className="text-red-500">Giscus not configured.</div>
  }

  return (
    <Giscus
      repo={repo as `${string}/${string}`}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping={mapping}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
    />
  )
}
