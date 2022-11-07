/**
 * Gera um delay.
 * @param ms 
 */
export async function delay(ms: number) {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('');
        }, ms);
    });
}