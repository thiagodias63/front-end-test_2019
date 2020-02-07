<template>
    <div class="menu-container">
        <ul class="menu-list">
            <li class="menu-item">
                <i class="fas fa-plane"></i>
                <a href="#">Book Flights</a>
            </li>
            <li class="menu-item">
                <i class="fas fa-plane"></i>
                <a href="#">Map View</a>
            </li>
            <li class="menu-item">
                <i class="fas fa-plane"></i>
                <a href="#">Flight Status</a>
            </li>
            <li class="menu-item active">
                <i class="fas fa-plane"></i>
                <a href="#">My Profile</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
.menu-container {
    margin: 0;
    padding: 0;
    background-color: #1D2029;
}
.menu-list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex:1;
    list-style: none;
}
.menu-list .menu-item {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-top: .8rem;
    margin-bottom: .8rem;
}
.menu-list .menu-item:nth-child(1) {
    margin-left: 0;
}
.menu-list .menu-item a {
    text-decoration: none;
    margin-top: .5rem;
}
.menu-list .menu-item a,
.menu-list .menu-item i {
    font-size: 1rem;
    color: #6B6C71;
}
.menu-list .menu-item.active {
    border-bottom: 1px solid #13E2CC;
}
.menu-list .menu-item.active a,
.menu-list .menu-item.active i {
    color: #EFEDEF;
}
</style>