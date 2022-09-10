from bs4 import BeautifulSoup

# We need this class because otherwise we can't put a list in a set.
class FrozenList(object):
    def __init__(self, l):
        self.l = tuple(l)
    def __eq__(self, other):
        return self.l == other.l
    def __len__(self):
        return len(self.l)

def streaker(_username):
    soup = BeautifulSoup("", "html.parser")
    count = 0
    for div in soup.find_all(attrs={"fill": "#ebedf0"}):
        mydict = dict(
            (k.strip(), v.strip())
            for k, v in (item.split(':"') for item in div.split('", '))
        )
        count += 1
    print(count)

streaker("sreetamdas")
