import assert from 'node:assert/strict';
import { createMemoryStore } from '@x12i/xentra-store';

const store = createMemoryStore();
const now = '2026-01-01T00:00:00.000Z';
await store.accounts.create({ id: 'demo', name: 'Demo', slug: 'demo', status: 'active', createdAt: now, updatedAt: now });
assert.equal((await store.accounts.findBySlug('demo')).id, 'demo');
await store.accounts.update('demo', { name: 'Updated demo' });
assert.equal((await store.accounts.getById('demo')).name, 'Updated demo');
assert.equal(await store.accounts.delete('demo'), true);
assert.equal(await store.accounts.getById('demo'), null);
console.log('In-memory account CRUD passed.');
