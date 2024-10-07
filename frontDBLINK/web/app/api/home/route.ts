import {ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS, createPostResponse} from "@solana/actions"
import { createCloseAccountInstruction, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { clusterApiUrl, Connection, PublicKey, SystemProgram, Transaction, LAMPORTS_PER_SOL } from "@solana/web3.js";
import {getEmptyTokenAccounts} from "./helper"
export async function GET(request: Request) {
  const response : ActionGetResponse = {
    icon : "https://solana.com/_next/static/media/logotype.e4df684f.svg",
    description : "A demo solana blink",
    title : "DO Blink!",
    label : "click me!",
    links : {
      actions : [
        {
          href : `${request.url}`,
          label : "same action",

        },
       
      ]
    }
    // error : {
    //   message : "This blink is not implemented yer"
    // }
  }
  return Response.json(response, {headers : ACTIONS_CORS_HEADERS});
}

export async function POST(request: Request) {
  const body: ActionPostRequest = await request.json(); // Parse the request body
  const url = new URL(request.url); // Parse the request URL
  const amount = Number(url.searchParams.get("amount")) || 0.1; // Get the amount from query params or default to 0.1
  const action = url.searchParams.get('action')
  let sender;
  sender = new PublicKey(body.account); // Parse the sender public key
  console.log(sender)
  const transaction = new Transaction()
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed"); // Create a connection to the mainnet-beta cluster
  let emptyTAs = await getEmptyTokenAccounts(sender, connection, TOKEN_PROGRAM_ID)

  if (emptyTAs.length > 20){
    console.log("user haas more than 20 empty TAs")
    emptyTAs = emptyTAs.slice(0, 20)
  }

  const ixs = emptyTAs.map(pks => {
    return createCloseAccountInstruction(pks, sender, sender, undefined, TOKEN_PROGRAM_ID)
  })

  transaction.add(...ixs)

  transaction.add(SystemProgram.transfer({
    fromPubkey: sender, // Sender public key
    toPubkey: new PublicKey("Dy3FFCpVHaoxucyzG2maQwyEiajQu1hGA8Yv9otETzea"), // Recipient public key
    lamports: amount * LAMPORTS_PER_SOL, // Amount to transfer in lamports
  }))
  transaction.feePayer = sender; // Set the fee payer
  transaction.recentBlockhash = (
    await connection.getLatestBlockhash()
  ).blockhash; // Get the latest blockhash
  transaction.lastValidBlockHeight = (
    await connection.getLatestBlockhash()
  ).lastValidBlockHeight; // Get the last valid block height

  const payload: ActionPostResponse = await createPostResponse({
    fields: {
      transaction, // Add the transaction to the response payload
      message: "closing " + emptyTAs.length + " token accounts", // Success message
    },
  });
  return new Response(JSON.stringify(payload), {
    headers: ACTIONS_CORS_HEADERS, // Set CORS headers
  });

}

export async function OPTIONS(req:Request) {
  return new Response(null, {headers : ACTIONS_CORS_HEADERS})
}

