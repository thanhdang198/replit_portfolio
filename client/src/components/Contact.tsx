import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import { SECTION_IDS, EMAIL, PHONE, LOCATION, WEBSITE, GITHUB_USERNAME, LINKEDIN_USERNAME, SOCIAL_LINKS } from '@/lib/constants';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { ContactFormData } from '@/types';
import { z } from 'zod';
import { insertMessageSchema } from '@shared/schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Send, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter, Code } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollEffect(sectionRef, { threshold: 0.1 });
  const { toast } = useToast();

  // Form validation schema
  const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    subject: z.string().min(5, { message: 'Subject must be at least 5 characters long' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters long' })
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  // Form submission handler
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t('contact.success'),
        description: '',
        variant: 'default',
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t('contact.error'),
        description: '',
        variant: 'destructive',
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    mutate(data);
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id={SECTION_IDS.CONTACT} 
      ref={sectionRef} 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-6">{t('contact.info')}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t('contact.email')}</h4>
                    <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">
                      {EMAIL}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t('contact.phone')}</h4>
                    <a href={`tel:${PHONE}`} className="text-primary hover:underline">
                      {PHONE}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t('contact.location')}</h4>
                    <p>{LOCATION}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t('contact.website')}</h4>
                    <a href={WEBSITE} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {WEBSITE.replace('https://', '')}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">{t('contact.connect')}</h4>
                <div className="flex gap-4">
                  <a 
                    href={SOCIAL_LINKS.GITHUB(GITHUB_USERNAME)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-slate-100 hover:bg-slate-200 text-zinc-700 p-3 rounded-lg transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={SOCIAL_LINKS.LINKEDIN(LINKEDIN_USERNAME)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-slate-100 hover:bg-slate-200 text-zinc-700 p-3 rounded-lg transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-slate-100 hover:bg-slate-200 text-zinc-700 p-3 rounded-lg transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-slate-100 hover:bg-slate-200 text-zinc-700 p-3 rounded-lg transition-colors"
                    aria-label="DEV"
                  >
                    <Code className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.name')}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t('contact.name')} 
                            {...field} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.email')}</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder={t('contact.email')} 
                            {...field} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>{t('contact.subject')}</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t('contact.subject')} 
                          {...field} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>{t('contact.message')}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t('contact.message')} 
                          rows={5} 
                          {...field} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-6 h-auto rounded-lg transition-colors inline-flex items-center"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {t('contact.submit')}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
