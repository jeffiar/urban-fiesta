from collections import namedtuple

Surgery = namedtuple('Surgery', 'name, type, text')

class SurgeryException(Exception):
    pass
