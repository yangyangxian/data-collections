import { neon } from "@neondatabase/serverless";

export async function executeSQL(sqlQuery: string = `select fieldName from Fields`) {
    const sql = neon('postgresql://data_owner:npg_7kS2ECNeZGtj@ep-bitter-tree-a79whe1v-pooler.ap-southeast-2.aws.neon.tech/data?sslmode=require');
    const response = await sql`${sqlQuery}`;
    return response[0].then((data: any) => { console.log(data); });
}