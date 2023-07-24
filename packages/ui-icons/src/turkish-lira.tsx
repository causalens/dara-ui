import { faTurkishLira } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TurkishLira icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TurkishLira = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTurkishLira} {...props} />;
};

export default TurkishLira;
