import { Confessed as ConfessedEvent } from "../generated/Confessions/Confessions"
import { Confessed } from "../generated/schema"

export function handleConfessed(event: ConfessedEvent): void {
  let entity = new Confessed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.confession = event.params.confession

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
