const fs = require('fs')
const {resolve} = require('path')
const matter = require('gray-matter')

const CONTENT_DIR = './content'
const INPUT_PATH = resolve(CONTENT_DIR)
const OUTPUT_PATH = resolve(CONTENT_DIR)
const OUTPUT_FILE_NAME = 'index.json'
const ENCODING = 'utf-8'

/**
 * Read directory and return an array of files
 * @param {String} dir
 * @returns {Array}
 */
function getContentList(dir) {
  try {
    const files = fs.readdirSync(dir)
    const mdFiles = files.filter(file => file.split('.')[1] === 'md')
    return mdFiles
  } catch (err) {
    throw err
  }
}

/**
 * Get an array of files and return the index content
 * @param {String} dir
 * @param {Array} list
 * @returns {String}
 */
function getIndexContent(dir, list) {
  const fileContent = {
    list: []
  }

  for (var i = 0; i < list.length; i++) {
    const file = fs.readFileSync(`${dir}/${list[i]}`, ENCODING)
    const content = matter(file)
    fileContent.list.push(content.data)
  }

  return JSON.stringify(fileContent)
}

const list = getContentList(INPUT_PATH)
const indexContent = getIndexContent(INPUT_PATH, list)

fs.writeFile(
  `${OUTPUT_PATH}/${OUTPUT_FILE_NAME}`,
  indexContent,
  ENCODING,
  err => {
    if (err) throw err
    console.log('The index was succesfully created!')
  }
)
