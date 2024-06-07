const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
     await page.goto('http://localhost:8080/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('We can open individual pokemon pages and their details', async ({ page }) => {
    await page.goto('http://localhost:8080/')

    await page.click('text=Ivysaur') // click on individual pokemon

    // Verifying the URL has changed
    await expect(page).toHaveURL('http://localhost:8080/pokemon/ivysaur');

    // Check if we are on Ivysaur page by checking for ability
    await expect(page.getByText('Overgrow')).toBeVisible()
  })
})