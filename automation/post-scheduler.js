/**
 * RFI - LinkedIn Post Scheduler & Automation Tool
 * 
 * SETUP INSTRUCTIONS:
 * ===================
 * 
 * OPTION 1: LINKEDIN AUTOMATION (Easy - No Code)
 * Use: Buffer.com, Hootsuite, or MeetAlfred
 * 
 * OPTION 2: ZAPIER AUTOMATION (Recommended)
 * Connect LinkedIn + Google Sheets
 * 
 * OPTION 3: N8N SELF-HOSTED (Free, Technical)
 * 
 * ============================================
 */

const RFI_POSTS = [
  {
    day: "Monday",
    theme: "Introduction",
    content: `🎯 Did You Know?

India is home to 63+ million MSMEs contributing 30% to GDP!

Resources From India (RFI) bridges the gap between global buyers and verified Indian manufacturers.

We verify suppliers, ensure quality, and build lasting partnerships.

🔗 Learn more: resourcesfromindia.github.io/ri-global

#MadeInIndia #GlobalTrade #B2B #SourcingFromIndia #Manufacturing`
  },
  {
    day: "Tuesday",
    theme: "Value Proposition",
    content: `🌏 Why Global Buyers Choose India:

✓ 63+ million MSMEs
✓ 28% lower manufacturing costs vs Western countries
✓ World-class IT & engineering talent
✓ Government support for exports
✓ Fastest-growing major economy

Your next supply chain partner might be in India. 🇮🇳

#IndiaManufacturing #GlobalSourcing #SupplyChain #ImportExport`
  },
  {
    day: "Wednesday",
    theme: "Service Spotlight",
    content: `🔍 How We Verify Suppliers:

Our verification process includes:
✅ Factory audits
✅ Financial background checks
✅ Quality certifications review
✅ References from existing clients
✅ Production capacity assessment

No more risky supplier deals! 💪

#SupplierVerification #QualityAssurance #B2B #TradeSafe`
  },
  {
    day: "Thursday",
    theme: "Success Story",
    content: `📈 From Our Files:

A European retailer was paying 40% more for home textiles.

We connected them with 3 verified manufacturers in Jaipur.

Result? 35% cost reduction + consistent quality for 2 years.

Your success story could be next. 🚀

#CaseStudy #SuccessStory #TextileIndustry #CostSavings`
  },
  {
    day: "Friday",
    theme: "Engagement",
    content: `🤔 Quick Question for Importers:

What's your BIGGEST challenge when sourcing from India?

A) Finding reliable suppliers
B) Quality control
C) Communication barriers
D) Shipping & logistics
E) All of the above

Drop your answer below! 👇

#ImportFromIndia #GlobalTrade #Question #Community`
  },
  {
    day: "Saturday",
    theme: "Educational",
    content: `📊 India - Trade Facts You Should Know:

🇮🇳 World's 5th largest economy
📦 7th largest exporter globally
🏭 Top 3 destinations for manufacturing
💰 $760+ billion trade volume
🌐 Exports to 190+ countries

India is open for business! Are you? 🌍

#TradeFacts #IndiaEconomy #ExportImport #GlobalBusiness`
  }
];

// Export for use in automation tools
module.exports = { RFI_POSTS };

console.log("📝 RFI Post Content Loaded!");
console.log(`📊 Total Posts: ${RFI_POSTS.length}`);
console.log("\n📅 Posting Schedule:");
RFI_POSTS.forEach((post, i) => {
  console.log(`   ${i + 1}. ${post.day} - ${post.theme}`);
});
