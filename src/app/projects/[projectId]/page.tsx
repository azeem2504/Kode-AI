import { ProjectView } from "@/modules/projects/ui/views/project-view"
import { getQueryClient, trpc } from "@/trpc/server"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { Suspense } from "react"
import {ErrorBoundary} from "react-error-boundary"

interface Props {
    params: Promise<{
        projectId: string
    }>
}



const Page = async ({ params }: Props) => {
    const {projectId} = await params


    console.log("Project ID:", projectId)
    if (!projectId) {
    return <div>Missing Project ID</div>;
  }

    const queryClient = getQueryClient()
    void queryClient.prefetchQuery(trpc.messages.getMany.queryOptions({
        projectId,
    }))
    void queryClient.prefetchQuery(trpc.projects.getOne.queryOptions({
        id: projectId,
    }))
    

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ErrorBoundary fallback={<div>Something went wrong</div>}>  
                <Suspense fallback={<p>Loading...</p>}>
                    <ProjectView projectId={projectId} />
                </Suspense>
            </ErrorBoundary>
        </HydrationBoundary>
    )
}
export default Page