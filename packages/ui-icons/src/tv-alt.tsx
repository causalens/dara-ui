import { faTvAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TvAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TvAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTvAlt} {...props} />;
};

export default TvAlt;
