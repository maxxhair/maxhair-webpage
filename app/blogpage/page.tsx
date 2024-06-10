import Image from "next/image";
import BlogHeading from "../Components/BlogHeading";
import { blogImage1, blogImage2, blogImage4 } from "../util/images";
import LatestBlogCard from "../Components/LatestBlogCard";

const BlogPage = () => {
  return (
    <div className=" lg:flex  md:w-3/4 mx-auto mt-[20vh] gap-6 max-lg:text-xs">
      <div className=" lg:w-8/12 max-lg:m-4">
        <BlogHeading />
        <div className="mt-8 leading-relaxed space-y-4">
          <p> Let’s begin with the anatomy of hair.</p>
          <p>
            When you look at a strand of hair under the micro-scope, you will
            find the following:
          </p>
          <p>
            <b> Medulla</b> - An almost invisible, innermost and the central
            part of most hair fibers, but not all. Absence or presence of
            medulla defines the category and origin of hair. Some studies
            suggest that It is found only in thick grey or white hair. Next time
            you see a bundle of natural grey or white hair, remember, most
            likely there is a medulla in there.
          </p>
          <p>
            <b> Cortex </b>- Constituent to 75% of the hair weight. It is made
            up of keratin spindles and is stabilized by a chemical compound
            called disulphide bonds. Cortex gives hair its strength and its
            colors. Cortex contains melanin granules that controls the color of
            hair. All those home remedies your mom and grand mom taught you
            about, were to strengthen this part of the hair.
          </p>
          <p>
            <b> Cuticle</b> - Layers of overlapping, flat, translucent cells
            that are meant to protect the cortex. Cuticles are like tiles on the
            roof of a house. They are layered and provide protection. Cuticles
            face away from the scalp and this is what gives the rough texture to
            the hair. The position of cuticles defines the quality of hair.
          </p>
          <Image src={blogImage1} alt="blog-Image-error" />
          <p>
            This is how intrinsically a strand of hair is built. More on it in
            the next post.
          </p>
          <p className="lg:text-lg ">
            <b> How to care for your cuticle.</b>
          </p>
          <Image
            src={blogImage2}
            alt="blog-Image-error"
            className="w-3/4 mx-auto m-8"
          />
          <p>
            Well, we now know how important the cuticle is lets take care of it.
          </p>
          <ol className=" list-inside list-decimal space-y-4 ">
            <li>
              <u> Cleansing:</u> Use a sulfate-free, pH-balanced shampoo to
              cleanse your hair extensions without stripping away its natural
              oils. Harsh detergents can cause the cuticle scales to lift,
              leading to frizz and breakage.
            </li>
            <li>
              <u>Conditioning Ritual:</u> Regular conditioning is essential for
              smoothing the cuticle and restoring moisture balance. Opt for a
              hydrating conditioner enriched with nourishing ingredients like
              keratin, argan oil, or shea butter. Focus on the mid-lengths and
              ends, where the cuticle is most prone to damage.
            </li>
            <li>
              <u>Cool Rinse:</u> Always rinse your hair extension with cold or
              lukewarm water to seal the cuticle and enhance shine. Cold water
              helps to constrict the cuticle scales, minimizing frizz and
              creating a smooth surface.
            </li>
            <li>
              <u>Protective Styling:</u> Minimize heat styling and chemical
              treatments, as excessive heat and chemical exposure can damage the
              cuticle, leading to brittleness and dullness. When using hot
              tools, always apply a heat protectant spray to shield the hair
              from thermal damage.
            </li>
            <li>
              <u>Routine maintenance:</u> Incorporate routine conditioning,
              nourishing oils to repair the cuticle. Look for products
              containing ingredients such as coconut oil, avocado oil, or
              hydrolyzed protein to strengthen the hair shaft from within.
            </li>
            <li>
              <u>Silk Pillowcases:</u> Swap your cotton pillowcase for a silk or
              satin one to reduce friction and minimize cuticle damage while you
              sleep. Silk pillowcases also help to retain moisture and prevent
              tangles, resulting in smoother, more manageable hair.
            </li>
          </ol>
          <p className="lg:text-lg">
            <b>What is Virgin remy hair</b>
          </p>
          <Image
            src={blogImage4}
            alt="blog-Image-error"
            className="w-3/4 mx-auto m-8"
          />
          <p>
            What distinguishes Virgin Remy hair extensions from their
            counterparts? unravel the essence.
          </p>
          <ol className=" list-inside list-decimal space-y-4">
            <li>
              <u>Virginity:</u> The term {`"Virgin"`} signifies that the hair
              used in these extensions has never undergone any chemical
              treatment, be it dyeing, perming, or bleaching. It retains its
              natural color and texture, providing a seamless blend with your
              own locks.
            </li>
            <li>
              <u>Remy:</u> This term denotes the meticulous collection and
              arrangement of the hair strands. In Remy extensions, the cuticles
              remain intact and aligned in one direction, from root to tip. This
              arrangement prevents tangling and ensures a smooth, natural flow,
              mimicking the behavior of your own hair.
            </li>
          </ol>
          <p>
            <b> The Ethical Aspect: </b>
          </p>
          <p>
            Beyond its aesthetic appeal, Virgin Remy hair extensions also carry
            ethical significance. Unlike non-Remy extensions, which often
            involve collecting fallen or discarded hair from various sources,
            Remy extensions are sourced through ethical means. They are
            typically obtained from donors who have voluntarily parted with
            their hair, ensuring fair compensation and ethical practices
            throughout the supply chain.
          </p>
          <p>
            <b> Quality That Speaks Volumes:</b>
          </p>
          <p>
            Investing in Virgin Remy hair extensions is not just a matter of
            style; it’s a commitment to quality. Here’s why:
          </p>
          <ol className=" list-inside list-decimal space-y-4">
            <li>
              <u>Durability:</u> Thanks to the intact cuticles and high-quality
              sourcing, Virgin Remy extensions boast remarkable durability. With
              proper care, they can last significantly longer than non-Remy
              alternatives, maintaining their luster and softness for months on
              end.
            </li>
            <li>
              <u>Versatility:</u> Whether you prefer sleek and straight or
              bouncy curls, Virgin Remy extensions offer unparalleled
              versatility. Since they haven’t been chemically treated, they can
              be styled, colored, and treated just like your natural hair,
              without losing their integrity.
            </li>
          </ol>
          <p>
            <b> Natural Look and Feel: </b>
          </p>
          <p>
            One of the hallmarks of Virgin Remy extensions is their ability to
            seamlessly blend with your own hair. The intact cuticles ensure a
            smooth texture and natural sheen, making it virtually
            indistinguishable from your natural locks.
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 max-lg:m-4 lg:sticky lg:h-[45vh] lg:top-32 lg:right-0">
        <b>Latest Blogs</b>
        <LatestBlogCard />
        <LatestBlogCard />
        <LatestBlogCard />
      </div>
    </div>
  );
};

export default BlogPage;
