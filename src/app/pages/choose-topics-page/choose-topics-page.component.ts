import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopicsService } from 'src/app/services/flashcards/topics.service';
import { Topic } from 'src/app/services/flashcards/topic';

interface ParentTopic {
  topic: string,
  flashcardsCount: number,
  childs: Topic[],
  expand: boolean,
  selected: boolean
}

@Component({
  selector: 'app-choose-topics-page',
  templateUrl: './choose-topics-page.component.html',
  styleUrls: ['./choose-topics-page.component.css']
})
export class ChooseTopicsPageComponent implements OnInit {

  topics: ParentTopic[];

  constructor(private router: Router, private topicsService: TopicsService) { }

  ngOnInit() {
    this.topics = [];
    const foundTopics = this.topicsService.getTopics();
    foundTopics.forEach(topic => {
      let parentTopic = this.topics.find((value) => {
        return value.topic === topic.parentTopic;
      });
      if (!parentTopic) {
        parentTopic = {
          topic: topic.parentTopic,
          flashcardsCount: 0,
          childs: [],
          expand: this.topics.length === 0,
          selected: false
        };
        this.topics.push(parentTopic);
      }
      parentTopic.childs.push(topic);
    });

    this.topics.forEach(topic => {
      this.updateParentTopic(topic);
    });
  }

  toggleSelectAll(topic: ParentTopic) {
    const newSelection = !topic.selected;
    topic.selected = newSelection;
    topic.childs.forEach(child => {
      child.selected = newSelection;
    });

    this.updateParentTopic(topic);
  }

  toggleSelect(child: Topic, parentTopic: ParentTopic) {
    child.selected = !child.selected;
    this.updateParentTopic(parentTopic);
  }

  updateParentTopic(topic: ParentTopic) {
    topic.selected = false;
    topic.flashcardsCount = 0;
    if (topic.childs.length !== 0) {
      topic.selected = topic.childs.findIndex(child => {
        return !child.selected;
      }) === -1;

      topic.childs.forEach(child => {
        if (child.selected) {
          topic.flashcardsCount += child.flashcardsCount;
        }
      });
    }
  }

  apply() {
    // TODO download new topics (if needed) and display progress bar
    this.router.navigate(['']);
  }

  back() {
    this.router.navigate(['']);
  }
}
