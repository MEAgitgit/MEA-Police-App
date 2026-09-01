#!/usr/bin/env node
// Pre-demo check for the MEA Police App.
//
//   node check-demo.js
//
// Runs the same requests the app itself makes, against the same backend the
// phone talks to, and says plainly whether the demo will work. Run it before
// walking into a room. Everything it does is read-only apart from signing in.

const BASE = process.argv[2] || 'https://mea-backend-um9p.onrender.com';
const LOGIN = { email: 'dercolo@revere.pd', password: '4321' };

// A photo of a product label. If the AI reads this back, it will read a real one.
const TEST_PHOTO = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAGQAlgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiivP/ib8Tf+Fc/2X/xKP7Q+3+b/AMvPlbNmz/YbOd/t0oA9Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8AaqP+Gmv+pR/8qX/2qgD6Aor5/wD+Gmv+pR/8qX/2qj/hpr/qUf8Aypf/AGqgD6Aor5//AOGmv+pR/wDKl/8Aaq7D4cfGD/hYHiG40n+wvsHk2jXPm/a/Nzh0XbjYv9/Oc9qAPUKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvn/9pr/mVv8At7/9o19AV8//ALTX/Mrf9vf/ALRoA+gKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr5/wDhZ/ycL41/7fv/AErSvoCvn/4Wf8nC+Nf+37/0rSgD6AooooAKKKKACiiigAooooAKKKKACiiigAooooAK+f8A9pr/AJlb/t7/APaNfQFfP/7TX/Mrf9vf/tGgD6AooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvn/wCFn/JwvjX/ALfv/StK+gK+f/hZ/wAnC+Nf+37/ANK0oA+gKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvn/wDaa/5lb/t7/wDaNfQFfP8A+01/zK3/AG9/+0aAPoCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+f/hZ/ycL41/7fv/StK+gK+f8A4Wf8nC+Nf+37/wBK0oA+gKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvn/8Aaa/5lb/t7/8AaNfQFfP/AO01/wAyt/29/wDtGgD6AooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvn/4Wf8AJwvjX/t+/wDStK+gK+f/AIWf8nC+Nf8At+/9K0oA+gKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvn/9pr/mVv8At7/9o19AV8//ALTX/Mrf9vf/ALRoA+gKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr5/wDhZ/ycL41/7fv/AErSvoCvn/4Wf8nC+Nf+37/0rSgD6AooooAKKKKACiiigAooooAKKKKACiiigAooooAK+f8A9pr/AJlb/t7/APaNfQFfP/7TX/Mrf9vf/tGgD6AooooAKKKKACiio7i3huoHguIY5oZBh45FDKw9CDwaAJKK850bTNPspdAltLG2t5G8S6lGzxQqhKqL8KCQOgAAA7YrnGGlH4ZWH9hfZPtg8Ozf2p9k2/6v7E+fO2/xeb5eN3P3sd6APaaK4G+k02T4b+LP7PttDgxp1xvXSLhZVP7lsFiEXB69jVefRbfTPEdvca5aaXYeH7iJleyhbdaLcJjy5JCyIuWVpByuMonJOKAPRqK8tg/sD/hJrX+0/wCz/wCwPL1D+zPtuzytmbLPl7+Mb/O24/h6cYqC5MUFpDc3jR3EsduxtbC/DJcPCJ5TCbaQ8ibZsBGCSRHkr3APWaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr5/+Fn/JwvjX/t+/9K0r6Ar5/wDhZ/ycL41/7fv/AErSgD6AooooAKKKKACiiigAooooAKKKKACiiigAooooAK+f/wBpr/mVv+3v/wBo19AV8/8A7TX/ADK3/b3/AO0aAPoCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+f/hZ/wAnC+Nf+37/ANK0r6Ar5/8AhZ/ycL41/wC37/0rSgD6AooooAKKKKACiiigAooooAKKKKACiiigAooooAK+f/2mv+ZW/wC3v/2jX0BXz/8AtNf8yt/29/8AtGgD6AooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvn/AOFn/JwvjX/t+/8AStK+gK+f/hZ/ycL41/7fv/StKAPoCiiigAooooAKKKKACiiigAooooAKKKKACiiigAr5/wD2mv8AmVv+3v8A9o19AV8//tNf8yt/29/+0aAPoCiiigAooooAKrahNc2+nXE1nam6ukjJig3hfMbHAySAOe9WaKAPJoJ7Kwsddh16AtcvrC+XFqc0Sx3Fw9nDuL4dlCLkv1woK4ywAHT316+j6doNifEH2WxNi27VsI/nSRpGEGXDKd4Lv6nZgHmuyooA80vPE2uCxvXtNRaXVQl8p09LZQbdI4pGhmCEFxuZYjhyQfNxjir2p+K57681KPQtWiaCMaTHFNEqSKjz3bxyEEg7sptGO2OMHNd7RQBwM11ff2/p9rdavcGOx8R/ZfOYRIZUawMqq+FCnLybBgDOR/FghNRa0g8cGbdbXd097bqLeQGO8gBVF3Qt/HDjLMuAP9Zyeld/RQB5Vp/inWbzQdJltvEBu5723sjeSrBDmzmkubeMqAFwNyyS8Nk/JkYrdmvtUOtvptrqLWyvr62jzJBEXMX9miY9VxuLjOSPboMV2NjZW+m6fbWNpH5dtbRLDEm4naigBRk8ngDrU9AHluqeLNWttD1V5dcNlcWNrdmzl8mIm+miuJ4sEMpBIWKMkKBzJnoMVr+NZVsfF/h7V3bbHptrd3Ep7CIyWschPsEkdv8AgNdVqGhadqkwlvIXdtnlsFmdFkTOdrqpAdc54YEcn1NaNAHkOnajqmjnUEW5h08XuoyXd1cXEyxCOZrW1k8oM0cgyTJJgbcnZwR0Ohd+Mtct9RtoopkmvfsxEmn+WEDy/YXnBRCPMIMiquSVHVdpIJr06igDy6HWWTxLeS2/iX7RaTQafFc6rshH2ZD9sbsuwZcIuWBx5mDyKcvi7XYCPPu90MTDUWnMCgSafHI0UhHHVgqS5H/PTjjgen0UAZ+hSXk+hWU9+xN1NEJZAVA2Fvm28f3c7fwrQoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+f/hZ/ycL41/7fv/StK+gK+f8A4Wf8nC+Nf+37/wBK0oA+gKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvn/8Aaa/5lb/t7/8AaNfQFfP/AO01/wAyt/29/wDtGgD6AooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvn/4Wf8AJwvjX/t+/wDStK+gK+f/AIWf8nC+Nf8At+/9K0oA+gKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvn/9pr/mVv8At7/9o19AV8//ALTX/Mrf9vf/ALRoA+gKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr5/wDhZ/ycL41/7fv/AErSvoCvn/4Wf8nC+Nf+37/0rSgD6AooooAKKKKACiiigAooooAKKKKACiiigAooooAK+f8A9pr/AJlb/t7/APaNfQFfP/7TX/Mrf9vf/tGgD6AooooAKKKKACq2pPdx6Xdvp8SS3qwubeOQ4V5Np2gn0JxVmo7i3iuraW3n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lYu//iK+gKKAPn//AIVZ8X/+h9/8rF3/APEV0Hwt+FviTwd4yvtc1zULG8+1WkkTPDNJJI0jSI5Zi6DOdpyc5ya9gooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z';
const EXPECT_IN_NAME = 'tide';

const green = s => '\x1b[32m' + s + '\x1b[0m';
const red   = s => '\x1b[31m' + s + '\x1b[0m';
const dim    = s => '\x1b[2m'  + s + '\x1b[0m';
const yellow = s => '\x1b[33m' + s + '\x1b[0m';

const results = [];
// A check marked advisory is reported but does not change the verdict: the demo
// still works without it. Only the checks an officer would visibly hit are fatal.
function record(name, ok, detail, fix, advisory) {
  results.push({ name, ok, fix, advisory: !!advisory });
  const tag = ok ? green('  PASS  ') : (advisory ? yellow('  WARN  ') : red('  FAIL  '));
  console.log(tag + name + (detail ? dim('   ' + detail) : ''));
}

async function req(path, opts, ms) {
  const r = await fetch(BASE + path, { ...opts, signal: AbortSignal.timeout(ms || 45000) });
  let body = null;
  try { body = await r.json(); } catch (e) {}
  return { status: r.status, body };
}

(async () => {
  console.log('\nChecking ' + BASE + '\n');
  let token = null;

  // 1. Is the backend awake, seeded, and holding its API keys?
  try {
    const r = await req('/api/ready', {}, 60000);
    const c = (r.body && r.body.checks) || {};
    if (r.body && r.body.checks) {
      record('Backend awake', true, 'up ' + Math.round((r.body.uptime || 0) / 3600) + 'h');
      record('Database seeded', !!c.demoAccount, (r.body.users || 0) + ' users',
             'The demo account is missing. Restart the Render service, it reseeds on boot.');
      record('Claude key present', !!c.anthropicKey, 'photo, price, ID scan',
             'ANTHROPIC_API_KEY is not set on Render. Add it in the Render dashboard.');
      record('Voice key present', !!c.openaiKey, 'spoken prompts',
             'OPENAI_API_KEY is not set on Render. Spoken prompts fall back to the browser voice, which sounds robotic. Everything else works. Add the key in the Render dashboard.', true);
    } else {
      // An older backend without /api/ready. Fall back to plain health.
      const h = await req('/api/health', {}, 60000);
      record('Backend awake', h.status === 200, 'no /api/ready on this deploy',
             'This backend predates the readiness check. Deploy the current main branch.');
    }
  } catch (e) {
    record('Backend awake', false, e.message, 'The backend did not answer. Check the Render dashboard.');
  }

  // 2. The sign-in the app performs by itself. Everything below depends on it.
  try {
    const r = await req('/api/auth/login', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(LOGIN)
    });
    token = r.body && r.body.token;
    record('App can sign in', !!token, token ? 'as Officer Dercolo' : 'HTTP ' + r.status,
           'The app cannot sign in, so every AI feature will be refused. Restart the Render service.');
  } catch (e) {
    record('App can sign in', false, e.message, 'The backend did not answer the sign-in request.');
  }

  const authed = t => ({ headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + t } });

  // 3. The feature that broke: photograph an item, get a name back.
  if (token) {
    try {
      const r = await req('/api/ai/identify-item', {
        method: 'POST', ...authed(token),
        body: JSON.stringify({ image: TEST_PHOTO, location: 'Revere, MA' })
      }, 60000);
      const name = r.body && r.body.name;
      const good = !!name && name.toLowerCase().includes(EXPECT_IN_NAME);
      record('Photo reads the item', good, name ? '"' + name + '"' : 'HTTP ' + r.status + ', no name',
             'The photo came back without an item name. Check the Claude key and the Render logs.');
    } catch (e) {
      record('Photo reads the item', false, e.message, 'The identify request failed.');
    }

    // 4. The price that lands on the report and decides the charge threshold.
    try {
      const r = await req('/api/price-search?q=' + encodeURIComponent('Tide Pods 42ct') + '&loc=Revere%2C%20MA',
                          authed(token), 45000);
      const price = r.body && r.body.price;
      record('Price comes back', typeof price === 'number' && price > 0,
             price ? '$' + price + ' from ' + (r.body.source || 'unknown') : 'no price',
             'No price returned. The report will show an item with no value on it.');
    } catch (e) {
      record('Price comes back', false, e.message, 'The price lookup failed.');
    }

    // 5. Voice dictation, the other thing an officer does live.
    try {
      const r = await req('/api/ai/parse-transcript', {
        method: 'POST', ...authed(token),
        body: JSON.stringify({
          transcript: 'I stopped a guy outside the CVS on Broadway, he had two Tide Pods in his bag, name is John Smith, he was cooperative.',
          location: 'Revere, MA'
        })
      }, 60000);
      const parsed = r.body && !r.body.fallback && r.body.narrative;
      record('Voice dictation parses', !!parsed,
             r.body && r.body.personName ? 'read the name "' + r.body.personName + '"' : 'fell back to raw text',
             'Dictation is not being parsed. Check the Claude key.');
    } catch (e) {
      record('Voice dictation parses', false, e.message, 'The transcript request failed.');
    }
  } else {
    for (const n of ['Photo reads the item', 'Price comes back', 'Voice dictation parses']) {
      record(n, false, 'skipped, not signed in', 'Fix sign-in first, these depend on it.');
    }
  }

  const fatal    = results.filter(r => !r.ok && !r.advisory);
  const warnings = results.filter(r => !r.ok && r.advisory);
  console.log('');
  if (!fatal.length) {
    console.log(green('  Ready to demo.') + '  ' + (results.length - warnings.length) + ' of ' + results.length + ' checks passed.');
    for (const w of warnings) console.log(yellow('  Worth knowing: ') + w.fix);
    console.log('');
    process.exit(0);
  }
  console.log(red('  Do not demo yet.') + '  ' + fatal.length + ' of ' + results.length + ' checks failed:\n');
  for (const f of fatal) if (f.fix) console.log('  - ' + f.name + ': ' + f.fix);
  for (const w of warnings) console.log(yellow('  Also: ') + w.fix);
  console.log('');
  process.exit(1);
})();
