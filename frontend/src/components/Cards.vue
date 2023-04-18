<template>
    <div class="cards">
        <div class="card">
            <div class="video">
                <video controls>

                </video>
            </div>
            <div class="card-body">
                <div class="title">
                    <p>
                        Title
                    </p>
                </div>
                <div class="bottom">
                    <p>Author: None</p>
                    <p>When publish</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.cards {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.cards .card {
    width: 300px;
    height: 280px;
    gap: 5px;
    padding: 5px 10px;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between;
    transition: all 0.3s;
}

.card:hover {
    box-shadow: 5px 5px 5px #00f5d4;
}

.cards .card .video {
    width: 280px;
    height: 180px;
}

.cards .card .video video {
    width: 100%;
    border-radius: 5px;
    height: 100%;
}

.cards .card .card-body .bottom {
    display: flex;
    margin-top: 6px;
    gap: 5px;
}
</style>