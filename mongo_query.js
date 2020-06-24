db.getCollection('nlu_corpus_source')
	.find({"article_source":"qa", "qa_set_name": "機器學習測試知識庫"}, 
			{ article_source:1, article_title:1, board:1, article_id:1, content:1, aq_set_name:1})


db.getCollection('nlu_model_sync_config')
	.find({"owner_id":"6c3efd32-ed74-4435-8574-443bf5ae19dc", "apps.app_name":"機器學習測試知識庫"})


db.getCollection('nlu_model_sync_config')
	.find({"owner_id":"6c3efd32-ed74-4435-8574-443bf5ae19dc", "apps.app_name":"機器學習測試知識庫"})	


db.getCollection('user_msg_log').find({"qa_card_set_id" : "8feed844-c12d-4e83-8ea9-ab4b5d859558"}).sort({create_time: 1})