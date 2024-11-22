const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "refer to:\n{\n   \"time\": 1550476186479,\n   \"blocks\": [\n      {\n         \"id\": \"oUq2g_tl8y\",\n         \"type\": \"header\",\n         \"data\": {\n            \"text\": \"Editor.js\",\n            \"level\": 2\n         }\n      },\n      {\n         \"id\": \"zbGZFPM-iI\",\n         \"type\": \"paragraph\",\n         \"data\": {\n            \"text\": \"Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.\"\n         }\n      },\n      {\n         \"id\": \"qYIGsjS5rt\",\n         \"type\": \"header\",\n         \"data\": {\n            \"text\": \"Key features\",\n            \"level\": 3\n         }\n      },\n      {\n         \"id\": \"XV87kJS_H1\",\n         \"type\": \"list\",\n         \"data\": {\n            \"style\": \"unordered\",\n            \"items\": [\n               \"It is a block-styled editor\",\n               \"It returns clean data output in JSON\",\n               \"Designed to be extendable and pluggable with a simple API\"\n            ]\n         }\n      },\n      {\n         \"id\": \"AOulAjL8XM\",\n         \"type\": \"header\",\n         \"data\": {\n            \"text\": \"What does it mean «block-styled editor»\",\n            \"level\": 3\n         }\n      },\n      {\n         \"id\": \"cyZjplMOZ0\",\n         \"type\": \"paragraph\",\n         \"data\": {\n            \"text\": \"Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\\\"cdx-marker\\\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core.\"\n         }\n      }\n   ],\n   \"version\": \"2.8.1\"\n}\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"time\": 1684832525116,\n  \"blocks\": [\n    {\n      \"id\": \"g43k3d-32\",\n      \"type\": \"header\",\n      \"data\": {\n        \"text\": \"Grocery List\",\n        \"level\": 1\n      }\n    },\n    {\n      \"id\": \"a26q6d-43\",\n      \"type\": \"paragraph\",\n      \"data\": {\n        \"text\": \"Here is your grocery list. You can add, edit and delete items.\"\n      }\n    },\n    {\n      \"id\": \"5d2r22-54\",\n      \"type\": \"list\",\n      \"data\": {\n        \"style\": \"unordered\",\n        \"items\": [\n          \"Milk\",\n          \"Eggs\",\n          \"Bread\",\n          \"Cheese\"\n        ]\n      }\n    },\n    {\n      \"id\": \"g75a33-65\",\n      \"type\": \"paragraph\",\n      \"data\": {\n        \"text\": \"Don't forget to add any other items you need!\"\n      }\n    }\n  ],\n  \"version\": \"2.8.1\"\n}\n```\n\n**Explanation:**\n\n- This JSON object represents a basic grocery list template for Editor.js.\n- It uses a `header` block for the title \"Grocery List\".\n- A `paragraph` block provides a brief description of the list.\n- An `unordered list` block contains a few sample grocery items.\n- Another `paragraph` block encourages adding more items.\n\n**How to Use:**\n\n1. **Install Editor.js:** Follow the installation instructions for Editor.js.\n2. **Add the Template:** Load the JSON object above into your Editor.js instance (likely through a configuration setting or API call).\n3. **Edit and Use:** You can now add, edit, and delete items within the list.\n4. **Customize:** Modify the sample items, add additional blocks (e.g., `header` for different sections), and style the template to match your needs.\n\n**Remember:** This is a simple template to get you started. You can extend it to include more complex features like:\n\n- Checkboxes for marking items as completed\n- Quantity fields for each item\n- Different list styles (ordered, numbered)\n- Additional blocks for notes or reminders\n- Integration with external data sources (e.g., a database)\n\nFor a more sophisticated grocery list, consider using custom Editor.js plugins or developing your own to add advanced functionality."},
        ],
      },
    ],
  });

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());


