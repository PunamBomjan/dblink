import { Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token"

export async function getEmptyTokenAccounts(user:PublicKey, connection : Connection, tokenProgram = TOKEN_PROGRAM_ID) {
    
    const res = await connection.getTokenAccountsByOwner(user, {programId: TOKEN_PROGRAM_ID}, "finalized")
    const accounts = res.value
    const emptyAccounts: PublicKey[] = []
    accounts.forEach(a => {
        let amount = a.account.data.readBigInt64LE(64)

        if(!amount){
            emptyAccounts.push(a.pubkey)
        }
    })

    console.log("fount" + emptyAccounts.length + " empty token accounts")
    return emptyAccounts
}