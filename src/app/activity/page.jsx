import ActivitiesTable from "@/components/activities/ActivityTable"
import { createClient } from "@/utils/supabase/server"

export default async function Activity(){

  const supabase = createClient()

  const { data } = await supabase
    .from("activities")
    .select()

  console.log(data)

  return (
    <div>
      <ActivitiesTable activities={data}/>
    </div>
  )
}