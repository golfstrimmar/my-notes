<?php
/**
 * Template Name: страница 'Portfolio'
 */
get_header('white');
?>


<div class="portfolio-info">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-5">
                  <div class="portfolio-info__text">
                    <!--заголовок и печатные слова -->
                        <h3> <?php the_field('port_title'); ?>
                            <?php if(get_field('port_typed')): ?>
                            <span class="red-span" id="typed" data-typed-text="
                            null,
                            <?php while(has_sub_field('port_typed')) : ?>
                            <?php the_sub_field('port_phrase'); ?>,
                            <?php endwhile; ?>                            
                            "> </span>
                            <?php endif; ?>
                        </h3>
                     <!-- ------------ -->
                        <p>
                            <?php the_field('port_text'); ?>
                              <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. -->
                        </p>
                      </div>
                  </div>
                  <div class="col-lg-6  col-xl-auto">
                      <div class="portfolio-info__image">
                          <img src="<?php echo get_template_directory_uri()?>/assets/images/portfolio/bg.svg" alt="img" class="img-before">
                           <img src="<?php the_field('port_main_img'); ?>">
                      </div>
                  </div>
              </div>
            </div>
        </div> 
  
     <!-- ==============================================   -->
    <div class="filter-box">
        <div class="filter-box__plaha"></div> 
        <div class="container">
            <div class="filter-box__tabs">
                <ul class="nav nav-tabs row" id="myTab" role="tablist"> 
                    <li class="nav-item"> 
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#allworks" role="tab" data-name="allworks" aria-controls="All works" aria-selected="true">
                        <img src="<?php echo get_template_directory_uri()?>/assets/images/portfolio/all.svg" alt="All works">
                            All works
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#design" role="tab" data-name="design" aria-controls="Design" aria-selected="false">
                        <img src="<?php echo get_template_directory_uri()?>/assets/images/portfolio/artist.svg" alt="Design">
                            Design</a> 
                    </li>
                    <div class="w-100 d-lg-none"></div> 
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#frontend" role="tab" data-name="frontend" aria-controls="Frontend" aria-selected="false">
                        <img src="<?php echo get_template_directory_uri()?>/assets/images/portfolio/frontend.svg" alt="Frontend">
                            Frontend</a>
                    </li>   
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#backend" role="tab" data-name="backend" aria-controls="Backend" aria-selected="false">
                        <img src="<?php echo get_template_directory_uri()?>/assets/images/portfolio/backend.svg" alt="Backend">  
                            Backend</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="body-tabs">
            <div class="body-tabs__content" id="myTabContent">
               
                <!-- -----------------allworks------------------------ -->
                <div class="tab-pane fade show active" id="allworks" role="tabpanel" aria-labelledby="home-tab">
                  <div class="container">
            
                    <?php
                    global $post; 
                    $myposts = get_posts( array(
                      'post_type'=>'projects',
                      'category' => 12,                  
                      'numberposts' => 15, 
                      // 'tag'=>'image-left'    
                    ) );
                    $reversed = array_reverse($myposts);
                    foreach( $reversed as $post ){
                        setup_postdata( $post );
                         $post_id = $post->ID;
                        $post_title = $post->post_title;
                    $link = sprintf(  esc_url( get_permalink( $post_id ) ), $post_id );
                    ?>  
                        <?php  include(get_template_directory(  ).'/includes/portfolio-all.php'); ?>
                    <?php
                    }
                    wp_reset_postdata(); 
                    ?>
                     
                  </div>
                </div>

                <!-- ------------------design----------------------- -->
            
                <div class="tab-pane fade" id="design" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="container">
                       
                        <?php
                        global $post; 

                        $myposts = get_posts( array(
                          'post_type'=>'projects',
                            'category' => 9,
                          'numberposts' => 15,     
                        ) );
                        $reversed = array_reverse($myposts);
                        foreach( $reversed as $post ){
                            setup_postdata( $post );
                             $post_id = $post->ID;
                            $post_title = $post->post_title;
                        $link = sprintf(  esc_url( get_permalink( $post_id ) ), $post_id );
                        ?>
                           <?php  include(get_template_directory(  ).'/includes/portfolio-all.php'); ?>
                        <?php
                        }
                        wp_reset_postdata(); 
                        ?>
             
                    </div>
                </div>
                <!-- ------------------frontend----------------------- -->
                
                <div class="tab-pane fade" id="frontend" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="container">
                    <?php
                    global $post; 

                    $myposts = get_posts( array(
                      'post_type'=>'projects',
                        'category' => 10,                  
                      'numberposts' => 15,     
                    ) );
                    $reversed = array_reverse($myposts);
                    foreach( $reversed as $post ){
                        setup_postdata( $post );
                         $post_id = $post->ID;
                        $post_title = $post->post_title;
                    $link = sprintf(  esc_url( get_permalink( $post_id ) ), $post_id );
                    ?>
                         <?php  include(get_template_directory(  ).'/includes/portfolio-all.php'); ?>
                    <?php
                    }
                    wp_reset_postdata(); 
                    ?>  
                    </div>
                </div>
               
               <!-- --------------------backend------------------------ -->
                <div class="tab-pane fade " id="backend" role="tabpanel" aria-labelledby="contact-tab">
                 <div class="container">
                    <?php
                    global $post; 
                    $myposts = get_posts( array(
                      'post_type'=>'projects',
                        'category' => 11,                  
                      'numberposts' => 15,     
                    ) );
                    $reversed = array_reverse($myposts);
                    foreach( $reversed as $post ){
                        setup_postdata( $post );
                         $post_id = $post->ID;
                        $post_title = $post->post_title;
                    $link = sprintf(  esc_url( get_permalink( $post_id ) ), $post_id );
                    ?>
                        <?php  include(get_template_directory(  ).'/includes/portfolio-all.php'); ?>
                    <?php
                    }
                    wp_reset_postdata(); 
                    ?>
                 </div>
                </div>
   
            </div>
        </div>

    </div>
</div>
<?php
// get_sidebar();
get_footer();