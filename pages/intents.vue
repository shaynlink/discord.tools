<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <div style="margin-bottom: 2%">
                                <h1 class="title is-5">Intents selection</h1>
                            </div>
                            <div class="columns">
                                <div class="column is-6">
                                    <div style="margin-bottom: 2%">
                                        <h1 class="title is-5">Guild Intents</h1>
                                    </div>
                                    <div v-for="key of Object.keys(guild)" :key="key" class="column is-12">
                                        <div class="columns is-vcentered">
                                            <div class="column is-1">
                                                <label class="toggle-control">
                                                    <input type="checkbox" :checked="bitfield.has(key)" v-on:click="triggerBit(key)">
                                                    <span class="control"></span>
                                                </label>
                                            </div>
                                            <div class="column" style="margin-left: 7%">
                                                <div><p :class="!wad.has(key) ? `label-text` : ''">{{key.toLowerCase().replace(/_/g, ' ')}}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column is-6">
                                    <div style="margin-bottom: 2%">
                                        <h1 class="title is-5">Direct Intents</h1>
                                    </div>
                                    <div v-for="key of Object.keys(direct)" :key="key" class="column is-12">
                                        <div class="columns is-vcentered">
                                            <div class="column is-1">
                                                <label class="toggle-control">
                                                    <input type="checkbox" :checked="bitfield.has(key)" v-on:click="triggerBit(key)">
                                                    <span class="control"></span>
                                                </label>
                                            </div>
                                            <div class="column" style="margin-left: 7%">
                                                <div><p :class="!wad.has(key) ? `label-text` : ''">{{key.toLowerCase().replace(/_/g, ' ')}}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div style="margin-bottom: 2%">
                                <h1 class="title is-5">Events subscribed</h1>
                            </div>
                            <div class="columns is-multiline">
                                <div v-for="key of Object.values(_assemply).map((v) => v.events).flat()" :key="key" class="column is-6">
                                    <div style="margin-bottom: -15%">
                                        <p v-on:click="triggerEvents(key)" style="cursor: pointer">{{bitfield.has(Object.entries(_assemply).find(([k, v]) => v.events.includes(key))[0]) ? '✅' : '❌'}}{{key.toLowerCase().replace(/_/g, ' ')}}</p>
                                    </div>
                                </div>
                                <div class="column is-12" style="margin-top: 5%">
                                    <p class="label-text">For colored intents, you must first go to your application in the Developer Portal and enable the toggle for the Privileged Intents you wish to use.<br /> If your bot is in 100 or more guilds, you must also get your <a href="https://support.discord.com/hc/en-us/articles/360040720412-Bot-Verification-and-Data-Whitelisting" target="_blank">bot verified.</a></p>
                                    <br />
                                    <p><a href="https://discord.com/developers/docs/topics/gateway#gateway-intents" target="_blank">🔗 Official Discord gateway intents documentation</a></p>
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
                        <div class="column is-6">
                            <div class="column is-12">
                                <div class="columns is-vcentered">
                                    <div class="column is-1">
                                        <label class="toggle-control">
                                            <input type="checkbox" :checked="all" v-on:click="triggerAll">
                                            <span class="control"></span>
                                        </label>
                                    </div>
                                    <div class="column">
                                        <div class="label-text"><p>Select all</p></div>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-12">
                                <div class="columns is-vcentered">
                                    <div class="column is-1">
                                        <label class="toggle-control">
                                            <input type="checkbox" :checked="allNoPrivilegeIntent" v-on:click="triggerAllNoPrivilegeIntent">
                                            <span class="control"></span>
                                        </label>
                                    </div>
                                    <div class="column">
                                        <div class="label-text"><p>Select all without privilege intents</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="columns is-vcentered is-multiline">
                                <div class="column is-12">
                                    <h1>Intents: <code>{{intents}}</code></h1>
                                </div>
                                <div class="column is-12">
                                    <p><a href="https://ziad87.net/intents/" target="_blank">🔗 You want use present ?</a></p>
                                </div>
                            </div>
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

        this.guild = {
            GUILDS: {
                bit: 1 << 0,
                events: [
                    'GUILD_CREATE',
                    'GUILD_UPDATE',
                    'GUILD_DELETE',
                    'GUILD_ROLE_CREATE',
                    'GUILD_ROLE_UPDATE',
                    'GUILD_ROLE_DELETE',
                    'CHANNEL_CREATE',
                    'CHANNEL_UPDATE',
                    'CHANNEL_DELETE',
                    'CHANNEL_PINS_UPDATE'
                ],
            },
            GUILDS_MEMBERS: {
                bit: 1 << 1,
                events: [
                    'GUILD_MEMBER_ADD',
                    'GUILD_MEMBER_UPDATE',
                    'GUILD_MEMBER_REMOVE',
                ],
            },
            GUILD_BANS: {
                bit: 1 << 2,
                events: [
                    'GUILD_BAN_ADD',
                    'GUILD_BAN_REMOVE',
                ],
            },
            GUILD_EMOJIS: {
                bit: 1 << 3,
                events: [
                    'GUILD_EMOJIS_UPDATE',
                ],
            },
            GUILD_INTEGRATIONS: {
                bit: 1 << 4,
                events: [
                    'GUILD_INTEGRATIONS_UPDATE',
                ],
            },
            GUILD_WEBHOOKS: {
                bit: 1 << 5,
                events: [
                    'WEBHOOKS_UPDATE',
                ],
            },
            GUILD_INVITES: {
                bit: 1 << 6,
                events: [
                    'INVITE_CREATE',
                    'INVITE_DELETE'
                ]
            },
            GUILD_VOICE_STATES:  {
                bit: 1 << 7,
                events: [
                    'VOICE_STATE_UPDATE',
                ],
            },
            GUILD_PRESENCES: {
                bit: 1 << 8,
                events: [
                    'PRESENCE_UPDATE'
                ],
            },
            GUILD_MESSAGES: {
                bit: 1 << 9,
                events: [
                    'MESSAGE_CREATE',
                    'MESSAGE_UPDATE',
                    'MESSAGE_DELETE',
                    'MESSAGE_DELETE_BULK',
                ],
            },
            GUILD_MESSAGE_REACTION: {
                bit: 1 << 10,
                events: [
                    'MESSAGE_REACTION_ADD',
                    'MESSAGE_REACTION_REMOVE',
                    'MESSAGE_REACTION_REMOVE_ALL',
                    'MESSAGE_REACTION_REMOVE_EMOJI',
                ],
            },
            GUILD_MESSAGE_TYPING: {
                bit: 1 << 11,
                events: [
                    'TYPING_START',
                ],
            },
        };

        this.direct = {
            DIRECT_MESSAGES: {
                bit: 1 << 12,
                events: [
                    'DIRECT_MESSAGE_CREATE',
                    'DIRECT_MESSAGE_UPDATE',
                    'DIRECT_MESSAGE_DELETE',
                    'DIRECT_CHANNEL_PINS_UPDATE',
                ]
            },
            DIRECT_MESSAGE_REACTIONS: {
                bit: 1 << 13,
                events: [
                    'DIRECT_MESSAGE_REACTION_REMOVE',
                    'DIRECT_MESSAGE_REACTION_REMOVE_ALL',
                    'DIRECT_MESSAGE_REACTION_REMOVE_EMOJI',
                ],
            },
            DIRECT_MESSAGE_TYPING: {
                bit: 1 << 14,
                events: [
                    'DIRECT_TYPING_START',
                ],
            },
        };

        this._assemply = {
            ...this.guild,
            ...this.direct
        };

        this.assembly = Object.fromEntries(Object.entries(this._assemply).map(([k, v]) => [k, v.bit]))

        return {
            intentList: {
                ...Object.keys(this._assemply).map((v) => [v, false]),
            },
            bitfield: new BitField(this.bit, this.assembly),
            wad: new BitField(32509, this.assembly),
            intents: 0,
            all: false,
            allNoPrivilegeIntent: false,
        };
    },
    methods: {
        triggerBit(bit) {
            this.intentList[bit] = !this.intentList[bit];

            if (this.intentList[bit]) this.bitfield.add(bit);
            else this.bitfield.remove(bit);

            this.intents = this.bitfield.bit;

            if (this.intents == 32767) this.all = true;
            else this.all = false;

            if (this.intents == 32509) this.allNoPrivilegeIntent = true;
            else this.allNoPrivilegeIntent = false;
        },

        triggerEvents(event) {
            const bit = Object.entries(this._assemply).find(([k, v]) => v.events.includes(event))[0];

            this.triggerBit(bit);
        },

        triggerAll() {
            this.intentList = Object.fromEntries(Object.entries(this._assemply).map(([k]) => [k, true]));

            this.bitfield.add(Object.values(this._assemply).map((v) => v.bit));
            this.intents = this.bitfield.bit;
            this.all = true;
            this.allNoPrivilegeIntent = false;
        },

        triggerAllNoPrivilegeIntent() {
            this.intentList = Object.fromEntries(Object.entries(this._assemply).map(([k]) => [k, this.wad.has(k)]));

            this.bitfield.bit = this.wad.bit;

            this.intents = this.bitfield.bit;
            this.all = false;
            this.allNoPrivilegeIntent = true;
        },
    },
};
</script>

<style scoped>
.label-text {
    color: #7289DA;
};
</style>
