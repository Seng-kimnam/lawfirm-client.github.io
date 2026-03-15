import logo from "../../../assets/images/gclawfirm-removebg-preview.png";
const OurOverviewComponent = () => {
  return (
    <article className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
      <div className="flex items-center justify-center">
        <img
          src={logo}
          className="w-full max-w-md"
          alt="my logo"
        />
      </div>
      <div>
        <h1 className="mb-4 text-2xl font-bold text-[#D4AF37] underline">Our Overview</h1>
        <p className="text-justify text-sm leading-relaxed text-[#001a3b]/90 sm:text-base">
          GCL Law Group (“GCL”, “we”, “our”, or “us”) is a
          results-oriented law group offering a wide range of legal services to
          individuals and businesses, ranging from new entrants to
          well-established businesses in Cambodia, with particular expertise in
          offering complex and tailored legal advice and services to foreign
          investors and corporations. We help our clients navigate through the
          constantly evolving Cambodian legal environment that is characterized
          by frequent changes and ambiguity in the actual application of legal
          norms, which may pose serious challenges to business. GCL has a
          uniquely experienced and qualified team to address these operational
          complexities and challenges. In addition, we have the necessary legal
          expertise, resources, industrial and sectoral networks, and
          flexibility to overcome and address matters of various complexities.
          We have been working with diverse clients ranging from local SMEs to
          multi-national corporations, MFIs to commercial banks, financial
          institutions, non-governmental organizations, associations, and
          several governmental authorities. GCL actively participates and
          collaborates with various associations, think tanks, organizations,
          institutions, and governmental authorities in the legal landscape to
          stay updated and continue learning in various emerging industries and
          sectors, especially banking and finance. We pride ourselves on being
          the trusted local counsel that clients rely on for efficient legal
          support in their personal and business pursuits. With over 20 years of
          experience, we have gained a deep understanding of legal practices and
          complexities in Cambodia. Throughout this time, we have built a strong
          reputation and are respected for our competence and capability to
          comprehend our clients’ needs. Recently, we have expanded our
          extensive legal expertise in various fields following local and
          regional social, economic, and market developments to provide
          desirable outcomes for our existing clients and also new ones in the
          area of practice and specialism as below :
        </p>
      </div>
    </article>
  );
};

export default OurOverviewComponent;
