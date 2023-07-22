//priority: 0

onForgeEvent("net.minecraftforge.client.event.ClientChatReceivedEvent", (e) => {
  if (e.getMessage().getContents().includes("TFC Homestead INFO")) {
    e.setCanceled(true)
  }
})
