<svelte:head>
    <title>Test Back / Front Servair Intranet</title>
</svelte:head>

<script>
    export let data;
    /** @type {any} */
    const { PUBLIC_URL, articles} = data;
</script>

{ #each articles as article }
    <main>
        <section>
        
        <h1 class="card-title">{article?.Titre}</h1>
        <p class="card-content">
                {@html article.contenu}
        </p>    
        </section>

        {#if article.Image}
            <div class="picture">
                <img src={`${PUBLIC_URL}/assets/${article.Image}`} alt="Un visuel quelconque">
            </div>
        {/if}
        
    </main>
    
{ /each }
