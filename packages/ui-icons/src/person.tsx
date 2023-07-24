import { faPerson } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Person icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Person = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPerson} {...props} />;
};

export default Person;
