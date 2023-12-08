import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { livematch,liveScoreApiResponse } from "./livematches.models";
export const scoreApi=createApi({
reducerPath:"scoreApi",
baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8080/'}),
endpoints:(builder)=>({
    livematches:builder.query<livematch[],void>({
    query:()=>'/match/live'
    }),
    allmatches:builder.query<livematch[],void>({
    query:()=>'/match'
    }),
    getpointstable:builder.query<liveScoreApiResponse,void>({
    query:()=>'/match/point-table'
    })
})
});

export const {useLazyLivematchesQuery,useLivematchesQuery,useAllmatchesQuery,useGetpointstableQuery}=scoreApi;