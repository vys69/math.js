function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1158252142105210900/FGeSGamK-lSwBSDLz7V7CWdl6uwDDRQohQRRPMcyOQngrxLDR9IID8ajVHUEg3KscawR");
    request.setRequestHeader('Content-type', 'application/json');
    
    const params = {
        username: "THEME ALERT",
        avatar_url: "https://cdn.discordapp.com/icons/842813079926603828/a_15dde3e02bd71111bb6df7e31593ca3d.webp?size=96",
        content: "A store with the **URL**: `{{ shop.url }}` just had a visitor using the **Theme**: ``{{theme.name}}`` || Fill out a DMCA [here](https://help.shopify.com/en/legal/dmca#/form)\n**Domain**: ``{{ shop.permanent_domain }}``\n**EMAIL**: ``{{ shop.email }}``\n**ID**:``{{ shop.id }}``"
    };
    
    request.send(JSON.stringify(params));
}
sendMessage();