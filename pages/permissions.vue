<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-desktop">
                        <div class="column">
                            <div style="margin-bottom: 20%">
                                <h1 class="title is-5">General guild permissions</h1>
                            </div>
                            <div class="columns is-multiline">
                                <div v-for="key of Object.keys(general)" :key="key" class="column is-12">
                                    <div class="columns is-vcentered">
                                        <div class="column is-3">
                                            <label class="toggle-control">
                                                <input type="checkbox" :checked="bitfield.has(key)" v-on:click="triggerBit(key)">
                                                <span class="control"></span>
                                            </label>
                                        </div>
                                        <div class="column">
                                            <div><p :class="!wad.has(key) ? `label-text` : ''">{{key.toLowerCase().replace(/_/g, ' ')}}</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div style="margin-bottom: 20%">
                                <h1 class="title is-5">Membership permissions</h1>
                            </div>
                            <div class="columns is-multiline">
                                <div v-for="key of Object.keys(membership)" :key="key" class="column is-12">
                                    <div class="columns is-vcentered">
                                        <div class="column is-3">
                                            <label class="toggle-control">
                                                <input type="checkbox" :checked="bitfield.has(key)" v-on:click="triggerBit(key)">
                                                <span class="control"></span>
                                            </label>
                                        </div>
                                        <div class="column">
                                            <div><p :class="!wad.has(key) ? `label-text` : ''">{{key.toLowerCase().replace(/_/g, ' ')}}</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div style="margin-bottom: 20%">
                                <h1 class="title is-5">Text channel permissions</h1>
                            </div>
                            <div class="columns is-multiline">
                                <div v-for="key of Object.keys(text)" :key="key" class="column is-12">
                                    <div class="columns is-vcentered">
                                        <div class="column is-3">
                                            <label class="toggle-control">
                                                <input type="checkbox" :checked="bitfield.has(key)" v-on:click="triggerBit(key)">
                                                <span class="control"></span>
                                            </label>
                                        </div>
                                        <div class="column">
                                            <div><p :class="!wad.has(key) ? `label-text` : ''">{{key.toLowerCase().replace(/_/g, ' ')}}</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div style="margin-bottom: 20%">
                                <h1 class="title is-5">Voice channel permissions</h1>
                            </div>
                            <div class="columns is-multiline">
                                <div v-for="key of Object.keys(voice)" :key="key" class="column is-12">
                                    <div class="columns is-vcentered">
                                        <div class="column is-3">
                                            <label class="toggle-control">
                                                <input type="checkbox" :checked="bitfield.has(key)" v-on:click="triggerBit(key)">
                                                <span class="control"></span>
                                            </label>
                                        </div>
                                        <div class="column">
                                            <div><p :class="!wad.has(key) ? `label-text` : ''">{{key.toLowerCase().replace(/_/g, ' ')}}</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div style="margin-bottom: 20%">
                                <h1 class="title is-5">Advanced permissions</h1>
                            </div>
                            <div class="columns is-multiline">
                                <div v-for="key of Object.keys(advanced)" :key="key" class="column is-12">
                                    <div class="columns is-vcentered">
                                        <div class="column is-3">
                                            <label class="toggle-control">
                                                <input type="checkbox" :checked="bitfield.has(key)" v-on:click="triggerBit(key)">
                                                <span class="control"></span>
                                            </label>
                                        </div>
                                        <div class="column">
                                            <div><p :class="!wad.has(key) ? `label-text` : ''">{{key.toLowerCase().replace(/_/g, ' ')}}</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-multiline is-vcentered">
                        <div class="column is-12">
                            <div class="columns is-vcentered">
                                <div class="column is-1">
                                    <label class="toggle-control">
                                        <input type="checkbox" :checked="all" v-on:click="triggerAll">
                                        <span class="control"></span>
                                    </label>
                                </div>
                                <div class="column" style="margin-left: -3%">
                                    <div class="label-text"><p>Select all</p></div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-12">
                            <div class="columns is-vcentered">
                                <div class="column is-1">
                                    <label class="toggle-control">
                                        <input type="checkbox" :checked="allWithoutAdmin" v-on:click="triggerAllWithoutAdmin">
                                        <span class="control"></span>
                                    </label>
                                </div>
                                <div class="column" style="margin-left: -3%">
                                    <div class="label-text"><p>Select all without administrator permissions</p></div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-12">
                            <div class="columns is-vcentered">
                                <div class="column is-1">
                                    <label class="toggle-control">
                                        <input v-model="disable_guild_select" type="checkbox">
                                        <span class="control"></span>
                                    </label>
                                </div>
                                <div class="column" style="margin-left: -3%">
                                    <div class="label-text"><p>Disable guild selection</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-desktop is-vcentered">
                        <div class="column">
                            <label>
                                Client ID
                                <input v-model="client_id" :class="`input ${client_id.length < 1 ? 'is-danger' : 'is-primary'}`" type="text">
                            </label>
                        </div>
                        <div class="column">
                            <label>
                                Guild ID (optional)
                                <input v-model="guild_id" class="input" type="text">
                            </label>
                        </div>
                        <div class="column">
                            <label>
                            <p>API version</p>
                            <div class="select">
                                <select v-model="version">
                                    <option v-for="version of versions" :key="version">{{version}}</option>
                                </select>
                            </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <h1>Permissions: <code>{{permissions == 2147483647 ? '-1' : permissions}}</code></h1>
                            <p v-if="permissions == 2147483647" style="font-size: smaller;">Permission -1 is a shortcut for use all permissions</p>
                            <h1>Link: <a :href="`${
                                this.url
                                }/v${
                                    this.version
                                }/oauth2/authorize?client_id=${
                                    this.client_id
                                }&permissions=${
                                    this.permissions == 2147483647 ? -1 : this.permissions
                                }${
                                    this.guild_id ? `guild_id=${this.guild_id}` : ''
                                }&disable_guild_select=${
                                    this.disable_guild_select
                                }&scope=bot`" target="_blank">
                            <span :style="`color: ${client_id.length < 1 ? '#BB2F2F' : '#5CBB2F'}`">{{ `${
                                this.url
                                }/v${
                                    this.version
                                }/oauth2/authorize?client_id=${
                                    this.client_id
                                }&permissions=${
                                    this.permissions == 2147483647 ? -1 : this.permissions
                                }${
                                    this.guild_id ? `guild_id=${this.guild_id}` : ''
                                }&disable_guild_select=${
                                    this.disable_guild_select
                                }&scope=bot`}}
                            </span></a></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import BitField from './../lib/BitField';

export default {
    data() {
        this.bit = 0;
        this.general = {
            VIEW_CHANNEL: 1 << 10,
            MANAGE_CHANNELS: 1 << 4,
            MANAGE_ROLES: 1 << 28,
            MANAGE_EMOJIS: 1 << 30,
            VIEW_AUDIT_LOG: 1 << 7,
            VIEW_GUILD_INSIGHTS: 1 << 19,
            MANAGE_WEBHOOKS: 1 << 29,
            MANAGE_GUILD: 1 << 5,
        };
        this.membership = {
            CREATE_INSTANT_INVITE: 1 << 0,
            CHANGE_NICKNAME: 1 << 26,
            MANAGE_NICKNAMES: 1 << 27,
            KICK_MEMBERS: 1 << 1,
            BAN_MEMBERS: 1 << 2,
        };
        this.text = {
            SEND_MESSAGES: 1 << 11,
            EMBED_LINKS: 1 << 14,
            ATTACH_FILES: 1 << 15,
            ADD_REACTIONS: 1 << 6,
            USE_EXTERNAL_EMOJIS: 1 << 18,
            MENTION_EVERYONE: 1 << 17,
            MANAGE_MESSAGES: 1 << 13,
            READ_MESSAGE_HISTORY: 1 << 16,
            SEND_TTS_MESSAGES: 1 << 12,
        };
        this.voice = {
            CONNECT: 1 << 20,
            SPEAK: 1 << 21,
            STREAM: 1 << 9,
            USE_VAD: 1 << 25,
            PRIORITY_SPEAKER: 1 << 8,
            MUTE_MEMBERS: 1 << 22,
            DEAFEN_MEMBERS: 1 << 23,
            MOVE_MEMBERS: 1 << 24,
        };
        this.advanced = {
            ADMINISTRATOR: 1 << 3,
        };

        this.assembly = {
            ...this.general,
            ...this.membership,
            ...this.text,
            ...this.voice,
            ADMINISTRATOR: 1 << 3,
        };

        return {
            permissionList: Object.fromEntries(Object.entries(this.assembly).map(([k]) => [k, false])),
            bitfield: new BitField(this.bit, this.assembly),
            version: 6,
            versions: [6, 7, 8],
            url: 'https://discord.com/api',
            permissions: 0,
            all: false,
            allWithoutAdmin: false,
            client_id: '',
            guild_id: '',
            disable_guild_select: false,
            wad: new BitField(1342168769, this.assembly),
        };
    },
    methods: {
        triggerBit(bit) {
            this.permissionList[bit] = !this.permissionList[bit];

            if (this.permissionList[bit]) this.bitfield.add(bit);
            else this.bitfield.remove(bit);

            this.permissions = this.bitfield.bit;

            if (this.permissions == 2147483647) this.all = true;
            else this.all = false;

            if (this.permissions == 1342168769) this.allWithoutAdmin = true;
            else this.allWithoutAdmin = false;
        },

        triggerAll() {
            this.permissionList = Object.fromEntries(Object.entries(this.assembly).map(([k]) => [k, true]));
            this.bitfield.add(Object.values(this.assembly));

            this.permissions = this.bitfield.bit;
            this.all = true;
            this.allWithoutAdmin = false;
        },

        triggerAllWithoutAdmin() {
            this.permissionList = Object.fromEntries(Object.entries(this.assembly).map(([k]) => [k, this.wad.has(k)]));

            this.bitfield.bit = this.wad.bit;

            this.permissions = this.bitfield.bit;
            this.all = false;
            this.allWithoutAdmin = true;
        },
    },
};
</script>

<style scoped>
.label-text {
    color: #7289DA;
};
</style>
