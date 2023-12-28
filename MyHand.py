#!/usr/bin/env python
# coding: utf-8

# In[1]:


import cgi
form = cgi.FieldStorage()
searchterm = form.getvalue('searchbox')


# In[2]:


print(searchterm)


# In[ ]:




